import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StorygeneratorModuleBase } from "./base/storygenerator.module.base";
import { StorygeneratorService } from "./storygenerator.service";
import { StorygeneratorController } from "./storygenerator.controller";
import { StorygeneratorGrpcController } from "./storygenerator.grpc.controller";
import { StorygeneratorResolver } from "./storygenerator.resolver";

@Module({
  imports: [StorygeneratorModuleBase, forwardRef(() => AuthModule)],
  controllers: [StorygeneratorController, StorygeneratorGrpcController],
  providers: [StorygeneratorService, StorygeneratorResolver],
  exports: [StorygeneratorService],
})
export class StorygeneratorModule {}
