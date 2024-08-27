import * as graphql from "@nestjs/graphql";
import { InputService } from "./input.service";

export class InputResolver {
  constructor(protected readonly service: InputService) {}
}
