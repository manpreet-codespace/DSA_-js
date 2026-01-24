#include <iostream>
using namespace std;

int main(){

    int sum = 0;
    int N;
    int num = 1;

    cin>>N;
// ------WHILE LOOP-----
    while(num<=N){
        sum=sum+num;
        num++;
    }
    cout<<sum<<endl;

sum=0;

// -----FOR LOOP------
for(num = 1;num<=N;num++)
{
    sum+=num;

}
cout<<sum<<endl;
}