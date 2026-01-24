// here number is 12345. There is total 5 digits

#include <iostream>
#include <cstdlib>
#include <cmath>

using namespace std;

// int main(){
//     long long N;
//     cin>>N;

//     int count = 0;

//     if(N==0) count=1;

//     N=llabs(N);

//     while(N>0){
//         count++;
//         N/=10;
//     }

//     cout<<count<<endl;
//     return 0;

// }


// int main(){

//     long long N;
//     cin>>N;

//     N=llabs(N);

//     int digits= (N==0)? 1:(int)(log10(N))+1;
//     cout<<digits<<endl;


//     return 0;

// }


int main(){

    long long N;
    cin>>N;
    int count=0;

    if(N==0) count=1;
     
    N=llabs(N);

    for(;N>0;N/=10)
    {
        count++;

    }
    cout<<count<<endl;



    return 0;


}