#include <iostream>
using namespace std;

int main(){
    int newNumber=0;
    int n;
    cin>>n;
//  --------WHILE LOOP------
    while(n>0){
        int digit= n%10;
        newNumber= newNumber*10 +digit;
        n/=10;

    }

    cout<<newNumber<<endl;

    for(;n>0;n/=10){
        int digit=n%10;
        newNumber = newNumber*10 + digit;

    }
    cout<<newNumber<<endl;

 return 0;
 
}