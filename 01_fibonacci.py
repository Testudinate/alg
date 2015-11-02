Дано целое число 1≤n≤40, необходимо вычислить 
n-е число Фибоначчи (напомним, что F0=0, F1=1 и Fn=Fn−1+Fn−2 при n≥2).

n = int(input())
f = [0, 1]
for i in range(2, n + 1):
    f.append(f[i-1] + f[i-2])
    #print(f[i])
print(f[n])

