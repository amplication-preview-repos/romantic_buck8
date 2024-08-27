import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StorygeneratorServiceBase } from "./base/storygenerator.service.base";

@Injectable()
export class StorygeneratorService extends StorygeneratorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
