declare namespace NodeJS {
    interface ProcessEnv {
        readonly PORT: number;
        readonly DB: string;
        readonly NODE_ENV: string;
        readonly BASE_URL:string
        readonly JWT_SECRET: string;
        readonly JWT_EXPIRE: string;
        readonly JWT_SECRET_REST: string;
        readonly JWT_EXPIRE_REST: string;
        readonly EMAIL_USERNAME :string;
        readonly EMAIL_PASSWORD :string;
        readonly EMAIL_HOST :string;
        readonly APP_NAME :string;
    }
}