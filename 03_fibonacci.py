Даны целые числа 1≤n≤10^18 и 2≤m≤10^5, 
необходимо найти остаток от деления n-го числа Фибоначчи на m.

Sample Input:

47905881698199969 76940

Sample Output:

13794

n, m = map(int, input().split())
k=0
T = [0,1]
for i in range(2,n):
    T.append((T[i-1]+T[i-2])%m)
    k = k+1
    if (T[i]==1) and (T[i-1]==0):
        break
print(T[(n%k)])
