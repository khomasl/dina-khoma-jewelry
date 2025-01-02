import {BasePayload, getPayload} from "payload";
import configPromise from "@/modules/admin/payload.config";
import type {Config, Header} from "@/modules/admin/payload-types";

export class PayloadService {
  static payload: BasePayload;

  static async getPayload(){
    if(!this.payload){
      this.payload = await getPayload({ config: configPromise })
    }
    return this.payload
  }

  static async getHeader(): Promise<Header> {
    return await this.getGlobal('header', 1)
  }

  private static async getGlobal(slug: keyof Config['globals'], depth = 0) {
    const global = await this.payload.findGlobal({
      slug,
      depth,
    })

    return global;
  }
}

await PayloadService.getPayload();
