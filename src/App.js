import { Console } from "@woowacourse/mission-utils";

class App {
  async run () {
    const numberInput = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요. \n');

    // 입력하지 않을 경우 결과 0 출력
    if(!numberInput || numberInput.length === 0){
      throw new Error('[ERROR] 덧셈할 문자열을 입력해 주세요.')
    } 

    let numbers;

    if(numberInput.startsWith('//')) {
      // \\n을 \n으로 변화
      const changeSlash = numberInput.replace(/\\n/g, '\n');
      const customDelimiterMatch = changeSlash.match(/^\/\/(.)\n(.*)$/); //  ["//;\n1",";","1"]
   
      if(customDelimiterMatch) {
        const delimiter = customDelimiterMatch[1];
        const numberString = customDelimiterMatch[2];
        numbers = numberString.split(delimiter) // 분리된 숫자들
      } else {
        numbers = numberInput.split(/[,:]/) 
      }
    } else {
      numbers = numberInput.split(/[,:]/) 
    }

    let sumNumbers = 0;

    for(const num of numbers) {
      const parsedNumber = Number(num)

      if(parsedNumber < 0) {
        throw new Error('[ERROR] 음수는 입력할 수 없습니다. ')
      }

      sumNumbers += parsedNumber || 0
    }

    Console.print(`결과 : ${sumNumbers}`)
  }
}
export default App;

// 음수 검증은 초반에 하는 것이 아닌 커스텀과 문자열 분리 후 하는 것이 옳다. -> 숫자끼리 비교가 되어야 하기 때문
