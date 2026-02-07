import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Lead {
    name: string;
    email: string;
    company: string;
    message: string;
    intent: string;
    timestamp: Time;
}
export type Time = bigint;
export interface backendInterface {
    getAllLeads(): Promise<Array<Lead>>;
    submitLead(intent: string, name: string, email: string, company: string, message: string): Promise<boolean>;
}
