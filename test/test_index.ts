import {main} from "../src/index"

test('main', ()=>{
    console.log = jest.fn();
    main()
    expect(console.log).toBeCalled();
})