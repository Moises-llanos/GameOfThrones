import { Pipe, PipeTransform } from "@angular/core";
import { Personaje } from "../interfaces/elenco-interface";


@Pipe({
    name: 'imagen'
})

export class ImagenPipe implements PipeTransform {

    transform(value: Personaje): string {
        return `${value.imageUrl}`
    }
}