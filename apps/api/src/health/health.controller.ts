import { Controller, Get } from "@nestjs/common";
import { HealthCheck } from "@nestjs/terminus";
// biome-ignore lint/style/useImportType: dependency must be imported as a value
import { HealthService } from "./health.service";

@Controller("health")
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  @HealthCheck()
  check() {
    return this.healthService.checkAll();
  }
}
