import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Pokemon extends Document {

    //id: String // Mongo me lo da
    @Prop({
        unique: true,
        index: true,
    })
    name: String;

    @Prop({
        unique: true,
        index: true,
    })
    no: Number;

}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);