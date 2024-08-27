import { Module } from "@nestjs/common";
import { InputService } from "./input.service";
import { InputController } from "./input.controller";
import { InputResolver } from "./input.resolver";

@Module({
  controllers: [InputController],
  providers: [InputService, InputResolver],
  exports: [InputService],
})
export class InputModule {}
