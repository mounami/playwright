import{test, expect} from '../../fixtures/base.fixtures';
import { StringUtils } from '../../utils/StringUtils';
import { DateUtils } from '../../utils/DateUtils';
import { RandomUtils } from '../../utils/RandomUtils';

test.describe('Utils demo', ()=>{
    test('using string utils', async () => {
        const name = 'john doe';
        const titleCase = StringUtils.toTitleCase(name);
        console.log('Title case:', titleCase);  // 'John Doe'
        
        const randomStr = StringUtils.generateRandomString(8);
        console.log('Random string:', randomStr);
        
        expect(titleCase).toBe('John Doe');
    });

    test('using date utils', async () => {
        const today = DateUtils.getCurrentDate();
        console.log('Today:', today);
        
        const tomorrow = DateUtils.addDays(1);
        console.log('Tomorrow:', tomorrow);
        
        const dayName = DateUtils.getDayOfWeek();
        console.log('Today is:', dayName);
        
        expect(today).toMatch(/\d{4}-\d{2}-\d{2}/);
    });

    test('using random utils', async () => {
        const email = RandomUtils.randomEmail();
        console.log('Random email:', email);
        
        const name = RandomUtils.randomName();
        console.log('Random name:', name.fullName);
        
        const password = RandomUtils.randomPassword(16);
        console.log('Random password:', password);
        
        expect(email).toContain('@');
        expect(name.fullName).toContain(' ');
        expect(password.length).toBe(16);
    });

    test('Testing real scenario', async()=>{
        const UserData = {
            email: RandomUtils.randomEmail('example.com'),
            name: RandomUtils.randomName(),
            password: RandomUtils.randomPassword(),
            registrationDate: DateUtils.getCurrentDate()
         };

         console.log('Generated user data:', UserData);

         expect(UserData.email).toContain('@');
         expect(UserData.name.fullName).toContain(' ');
         expect(UserData.password.length).toBe(12);
        }
    );

})

