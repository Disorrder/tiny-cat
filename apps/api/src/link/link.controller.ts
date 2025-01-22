import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import type { CreateLinkDto } from "./dto/create-link.dto";
// biome-ignore lint/style/useImportType: apps/api/src/app.controller.ts
import { LinkService } from "./link.service";

@Controller("link")
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Post()
  create(@Body() dto: CreateLinkDto) {
    return this.linkService.create(dto);
  }

  // @Get()
  // findAll() {
  //   return this.linkService.findAll();
  // }

  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return this.linkService.findOne(slug);
  }

  @Get(":slug/exists")
  checkOne(@Param("slug") slug: string): Promise<boolean> {
    return this.linkService.checkOne(slug);
  }

  // @Patch(":slug")
  // update(@Param("slug") slug: string, @Body() dto: UpdateLinkDto) {
  //   return this.linkService.update(slug, dto);
  // }

  // @Delete(":slug")
  // remove(@Param("slug") slug: string) {
  //   return this.linkService.remove(slug);
  // }
}
