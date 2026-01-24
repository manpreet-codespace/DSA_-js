#include <iostream>
using namespace std;

int main(){
    int newNumber=0;
    int n;
    cin>>n;

    int original=n;


    while(n>0){
        int digit= n%10;
        newNumber= newNumber*10 +digit;
        n/=10;

    }
     cout<<newNumber<<endl;

    if(newNumber==original){cout<<"Number is palindrome"<<endl;}
    else {cout<<"Number is not palindrome"<<endl;}


 return 0;
 
}