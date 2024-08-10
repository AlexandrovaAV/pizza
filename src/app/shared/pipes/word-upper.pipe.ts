import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'wordUpper'
})
export class WordUpperPipe implements PipeTransform {

  transform(value: string, wordParts: string[]): string {
    let result = value;

    wordParts.forEach(item => {
      let firstStringWordPartUpper = item.split('')[0].toUpperCase();
      let firstStringWordPartLower = item.split('')[0].toLowerCase();
      let firstStringWordPartRegex = `[${firstStringWordPartUpper}${firstStringWordPartLower}]`;
      let nextStringWordPart = item.slice(1);

      result = result.replace(new RegExp('[А-Яа-я]*' + firstStringWordPartRegex + nextStringWordPart + '[а-я]*', 'g'), (match: string) => {
        return match.toUpperCase();
      });
    });

    return result;

  }

}
