#include <iostream>
using namespace std;

int main(){
    int num;
    cin>>num;

    int i=1;

//----WHILE LOOP----- 
    while(i<=10){
        cout<<i *num<<endl;
        i++;

    }
    cin>>num;

// ------FOR LOOP-------
    for(int i=1;i<=10;i++)
    {
        cout<<i*num<<endl;
    }
}