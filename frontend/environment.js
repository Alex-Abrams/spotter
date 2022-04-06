// file for testing between emulator and physcial device
export const EMULATOR_HOST = 'http://10.0.2.2:3000';

export const PHONE_HOST = 'http://192.168.1.21:3000';

// export const PHONE_HOST = 'http://192.168.1.21:19000';

export const HOST = (true) ? EMULATOR_HOST : PHONE_HOST;
