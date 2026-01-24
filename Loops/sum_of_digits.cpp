#include <iostream>
#include <cstdlib>
using namespace std;

int main(){

    long long N;
    cin>>N;

    int sum=0;

    N = llabs(N);

    while(N>0)
    {
        N %= 10;
        sum += N;
        N /= 10;

    }
    cout<<sum<<endl;
    
    return 0;

}