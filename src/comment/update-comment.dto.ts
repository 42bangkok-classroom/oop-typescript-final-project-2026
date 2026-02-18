import { IsString, IsNotEmpty, IsInt, MinLength, MaxLength, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Optional } from '@nestjs/common';

export class UpdateCommentDto {
    @IsOptional()
    @ApiProperty({
        description: 'The content of the comment',
        example: 'This post is very helpful!',
        minLength: 1,
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    message!: string;

    @IsOptional()
    @ApiProperty({
        description: 'Name of the person who wrote the comment',
        example: 'Alice Smith',
    })
    @IsString()
    @IsNotEmpty()
    authorName!: string;

    @IsOptional()
    @ApiProperty({
        description: 'ID of the post this comment belongs to',
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    @IsString() 
    @IsNotEmpty()
    postId!: string;
}