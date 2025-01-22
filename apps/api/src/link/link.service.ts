import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { generateSlug } from "src/lib/math";
import type { Repository } from "typeorm";
import type { CreateLinkDto } from "./dto/create-link.dto";
import type { UpdateLinkDto } from "./dto/update-link.dto";
import { Link } from "./entities/link.entity";

@Injectable()
export class LinkService {
  constructor(
    @InjectRepository(Link)
    private readonly linkRepository: Repository<Link>,
  ) {}

  async create(dto: CreateLinkDto) {
    let attempts = 10;
    while (attempts > 0) {
      const slug = dto.slug ?? generateSlug();
      const exists = await this.checkOne(slug);
      if (!exists) {
        return this.linkRepository.save({ ...dto, slug });
      }
      attempts--;
    }

    throw new Error("Failed to generate unique slug");
  }

  findAll() {
    return this.linkRepository.find();
  }

  findOne(slug: string) {
    return this.linkRepository.findOne({ where: { slug } });
  }

  update(slug: string, dto: UpdateLinkDto) {
    return this.linkRepository.update(slug, dto);
  }

  remove(slug: string) {
    return this.linkRepository.delete(slug);
  }

  checkOne(slug: string): Promise<boolean> {
    return this.linkRepository.exists({ where: { slug } });
  }
}
