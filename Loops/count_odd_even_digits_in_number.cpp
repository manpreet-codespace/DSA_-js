#include <iostream>
using namespace std;

int main(){

    // 12345678

    int digit,N;
    cin>>N;
    int count = 0;
    int original=N;

    int totalCount=0;
     if (N==0) {
        count=0;
        totalCount=1;
     }

    while(N!=0){
        totalCount++;
        N/=10;

    }
    cout<<"Total"<<totalCount<<endl;

    while(original!=0){
        digit=original%10;
        if(digit%2==0)
        {
            count++;
        }
            original/=10;

    }
cout<<"even numbers:"<<count<<endl;


cout<<"Odd Numbers:"<<totalCount-count<<endl;

    return 0;

}