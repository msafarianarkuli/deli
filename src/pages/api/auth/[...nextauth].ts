import NextAuth, {NextAuthOptions, Session} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {JWT} from "next-auth/jwt";
import {User} from "types/interfaces";
import axios, {AxiosError} from "axios";
import {NextApiRequest, NextApiResponse} from "next";

type sessionToken = JWT & User;

interface ILoginRes {
  user: {
    id: number;
    name: string | null;
    phone: string;
    role: [
      {
        id: number;
        name: string;
      }
    ];
    birthday: string | null;
    invite_token: string | null;
    age_level: string | null;
    gender: string | null;
    anniversary_date: string | null;
  };
  auth: {
    token: string;
    expires_at: string;
  };
}

export const authOptions = (req: NextApiRequest): NextAuthOptions => ({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const {phone, code} = credentials as {phone: string; code: string};
        console.log("credentials", phone, code);
        const url = process.env.DOMAIN_API + "/api/users/verify-code";
        const body = {
          code,
          phone,
        };
        try {
          const res = await axios.post<ILoginRes>(url, body);
          const {auth, user} = res.data;
          const data: User = {
            useId: user.id,
            name: user.name,
            phone: user.phone,
            birthday: user.birthday,
            invite_token: user.invite_token,
            age_level: user.age_level,
            gender: user.gender,
            anniversary_date: user.anniversary_date,
            token: auth.token,
            expires_at: auth.expires_at,
          };
          return {
            id: user.id.toString(),
            ...data,
          };
        } catch (e: unknown) {
          let message = "";
          if (e instanceof AxiosError && e.response) {
            const data = e.response.data;
            message = data?.message;
            console.log("message", message);
          }
          throw new Error(message);
          // return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({token, user}) {
      // console.log("jwt token", token);
      // console.log("jwt user", user);
      const name = req.query?.name;
      if (name && !Array.isArray(name)) {
        token.name = decodeURI(name);
      }
      return {...token, ...user};
    },
    async session({session, token}: {session: Session; token: sessionToken}) {
      // console.log("session session", session);
      // console.log("session token", token);
      // console.log("session user", user);
      session.user = {
        useId: token.useId,
        name: token.name,
        phone: token.phone,
        token: token.token,
        birthday: token.birthday,
        invite_token: token.invite_token,
        age_level: token.age_level,
        gender: token.gender,
        anniversary_date: token.anniversary_date,
      };
      const month = 30 * 24 * 3600 * 1000;
      const expires = new Date().getTime() + month;
      session.expires = token.expires_at || new Date(expires).toISOString();
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth",
    signOut: "/",
  },
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, authOptions(req));
};

export default handler;