#include <iostream>
using namespace std;

int main(){

    int N;
    int num=1;
    cin>>N;

    // ------WHILE LOOP--------
    while(num<=N){
        if(num%2!=0){
            cout<<num<<endl;
            
        }
        num++;

    }
    cout<<"For Loop"<<endl;
    // -------FOR LOOP-----------
    for(num=1;num<=N;num++){
        if(num%2!=0){
            cout<<num<<endl;

        }
    }

    return 0;

}