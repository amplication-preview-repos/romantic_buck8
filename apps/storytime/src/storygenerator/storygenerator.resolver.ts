import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { StorygeneratorResolverBase } from "./base/storygenerator.resolver.base";
import { Storygenerator } from "./base/Storygenerator";
import { StorygeneratorService } from "./storygenerator.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Storygenerator)
export class StorygeneratorResolver extends StorygeneratorResolverBase {
  constructor(
    protected readonly service: StorygeneratorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
