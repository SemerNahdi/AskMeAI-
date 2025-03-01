import { Redis } from "@upstash/redis";

// Use the Redis class properly with a capital "R" as it's the correct class name.
export const redis = Redis.fromEnv();
