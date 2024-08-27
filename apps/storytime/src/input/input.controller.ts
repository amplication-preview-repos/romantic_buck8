import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { InputService } from "./input.service";

@swagger.ApiTags("inputs")
@common.Controller("inputs")
export class InputController {
  constructor(protected readonly service: InputService) {}
}
