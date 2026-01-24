#include <iostream>
using namespace std;

int main(){

    int digit;
    int i=1;

    cin>>digit;

    while(i<=digit)
    {
        if(digit%i==0)
        {
            cout<<i<<endl;
        }
        i++;

    }


    return 0;

}