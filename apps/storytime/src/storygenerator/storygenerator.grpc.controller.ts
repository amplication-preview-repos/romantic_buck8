import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StorygeneratorService } from "./storygenerator.service";
import { StorygeneratorGrpcControllerBase } from "./base/storygenerator.grpc.controller.base";

@swagger.ApiTags("storygenerators")
@common.Controller("storygenerators")
export class StorygeneratorGrpcController extends StorygeneratorGrpcControllerBase {
  constructor(protected readonly service: StorygeneratorService) {
    super(service);
  }
}
