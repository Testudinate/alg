
Задача на программирование: наибольший общий делитель


По данным двум числам 1≤a,b≤2⋅10^9 найдите их наибольший общий делитель.

Sample Input 1:

18 35

Sample Output 1:

1

Sample Input 2:

14159572 63967072

Sample Output 2:

4

#include <iostream>

int main() {
  // put your code here
  int a,b;
  std::cin>>a>>b;
  int c;
  while (b) {
      c = a % b;
      a = b;
      b = c;        
   } 
  std::cout<<a;
  return 0;
}
