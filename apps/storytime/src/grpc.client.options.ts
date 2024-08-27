import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["user", "storygenerator"],
    protoPath: ["src/user/user.proto", "src/storygenerator/storygenerator.proto"],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
