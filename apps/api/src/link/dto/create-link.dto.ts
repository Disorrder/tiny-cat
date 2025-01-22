import { Transform } from "class-transformer";
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from "class-validator";

export class CreateLinkDto {
  @IsNotEmpty()
  @IsUrl({}, { message: "Must be a valid URL" })
  url: string;

  @IsOptional()
  @IsString()
  @Length(3, 10, { message: "Slug must be between 3 and 10 characters" })
  @Transform(({ value }) => value?.trim())
  slug?: string;
}
