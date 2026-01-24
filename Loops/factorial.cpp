#include <iostream>
using namespace std;

int main(){

    int N;
    cin>>N;
    int fact=1;


    if(N==0) fact=1;

    while(N>0)
    {
        fact= fact*N;
        N--;


    }

    cout<<fact;
    
    return 0;

}