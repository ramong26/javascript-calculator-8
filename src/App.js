import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요. \n");

    // 빈 문자열일 경우 
    if(!input){
      Console.print("결과 : 0");
      return;
    }

    let numbers;

    if(input.startsWith("//")) {
      const customDelimiterMatch = input.match(/^\/\/(.)\n(.*)$/);
      if(customDelimiterMatch){
        const delimiter = customDelimiterMatch[1];
        const numberString = customDelimiterMatch[2];
        numbers = numberString.split(delimiter);
      } else {
        numbers = input.split(/[,:]/)
      }
    } else {
      numbers = input.split(/[,:]/)
    }

    let sum = 0;

    for(const num of numbers){
      const number = Number(num);
      
      // 음수 검증
      if (number < 0) {
        throw new Error("[ERROR]");
      }
      
      sum += number || 0;
    }

    Console.print(`결과: ${sum}`)
  }
}

export default App;
