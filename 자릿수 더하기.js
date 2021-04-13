function solution(n)
{
    var answer = String(n).split("");
    var result = 0;
    for (var i in answer) {
        result += Number(answer[i]);
    }
    return result;
}