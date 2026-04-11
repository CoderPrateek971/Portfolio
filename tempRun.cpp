#include<iostream>
using namespace std;


     int compress(vector<char>& chars) {
        if (chars.size() == 1)
            return 1;
        int j = 0;
        char s = chars[0];
        int count = 0;
        for (int i = 0; i < chars.size(); i++) {

            if (chars[i] == s) {
                count++;
            } else {
                chars[j++] = s;
                string cnt = to_string(count);
                for (char x : cnt) {
                    chars[j++] = x;
                }
                s = chars[i];
                count = 1;
            }
        }

        chars[j++] = s;
        string cnt = to_string(count);
        for (char x : cnt) {
            chars[j++] = x;
        }

        for(char x : chars){
            cout << x << " ";
        }
        return j ;
    }
int main(){
    vector<char> s = {'a','a','b','b','c','c','c'};
    int res = compress(s);
    cout << res << endl;
}