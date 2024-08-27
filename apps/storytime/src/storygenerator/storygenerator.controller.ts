import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StorygeneratorService } from "./storygenerator.service";
import { StorygeneratorControllerBase } from "./base/storygenerator.controller.base";

@swagger.ApiTags("storygenerators")
@common.Controller("storygenerators")
export class StorygeneratorController extends StorygeneratorControllerBase {
  constructor(
    protected readonly service: StorygeneratorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
