import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  allBottomIconsStyle: {width: 16, height: 16},
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  WIDTH: Dimensions.get('window').width,
  fdRow: {flexDirection: 'row'},
  center: {alignItems: 'center', justifyContent: 'center'},
  mh20: {marginHorizontal: 20},
  ph20: {paddingHorizontal: 20},
  white: {color: 'white'},
  fl1: {flex: 1},
  AllButtonContainer: {
    alignSelf: 'center',
    backgroundColor: '#EA4F3D',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AllButtonText: {color: 'white'},
  AllButtonButton: {
    width: '100%',
    height: 48,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // -------------- HOME HEADER START --------------

  // -------------- CAMERA STYLES START --------------
  CameraContainer: {
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CameraCameraIcon: {
    width: 30,
    height: 30,
    backgroundColor: '#EA4F3D',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    position: 'absolute',
    zIndex: 1,
  },
  CameraAvaIcon: {
    backgroundColor: '#C4C4C4',
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
  },
  // -------------- CAMERA STYLES END --------------
  headerBlock: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    marginHorizontal: 15,
    alignItems: 'center',
  },

  logoStyle: {
    width: 110,
    height: 20,
  },
  // --------------- HOME HEADER END --------------

  // -------------- START COMPONENTS STYLE --------------
  HeaderComponentBlock: {
    flexDirection: 'row',
    backgroundColor: '#EA4F3D',
    minHeight: 67,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  // --------------- EDN COMPONENTS STYLE --------------

  // BottomAddStyle
  Add: {color: 'red', fontSize: 10, marginBottom: 10},

  // Drawer Social Icons Style
  socialIconsBlock: {
    minHeight: 80,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 53,
  },
  socialIconsStyle: {
    overflow: 'hidden',
    position: 'relative',
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BurgerLine: {
    height: 1,
    backgroundColor: '#E8E8E8',
    borderWidth: 0.5,
    marginTop: -10,
    marginBottom: 15,
  },
  BurgerText: {
    marginBottom: 43,
  },
  SocialShadow: {
    width: 41,
    height: 41,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    padding: 5,
    elevation: 3,
  },

  // --------------- PROFILE STYLES START --------------
  ProfileHeader: {
    height: 183,
    backgroundColor: '#EA4F3D',
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  MyProfileText: {
    marginTop: 28,
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  HeaderProfileBlock: {flexDirection: 'row', marginTop: 20},
  ProfileHeaderAva: {alignSelf: 'center'},
  ProfileBalance: {
    minHeight: 66,
    borderWidth: 1,
    borderColor: '#EA4F3D',
    marginTop: 36,
    padding: 13,
    marginHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ProfileReplenishText: {
    fontSize: 12,
    color: '#EA4F3D',
    marginRight: 15,
    alignSelf: 'center',
  },
  ProfileAddBlock: {
    borderRadius: 4,
    marginTop: 20,
    marginLeft: 20,
    width: 160,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
  },
  ProfileAddText: {
    color: '#A7A7A7',
    fontSize: 16,
    marginTop: 25,
    textAlign: 'center',
  },
  // --------------- PROFILE STYLES END --------------

  // --------------- LOGIN STYLES START --------------
  LoginIcon: {alignSelf: 'center', width: 180, height: 90},
  LoginIconBlock: {
    marginTop: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  LoginInputBlock: {
    alignSelf: 'center',
    marginTop: 20,
    width: '90%',
    height: 44,
    color: 'black',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  LoginRecover: {
    color: '#8A8A8A',
    fontSize: 16,
    marginTop: 48,
    alignSelf: 'center',
  },
  LoginRegistrText: {
    color: '#EA4F3D',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  LoginSkip: {color: '#8A8A8A', alignSelf: 'center', marginVertical: 54},
  // --------------- LOGIN STYLES END --------------

  // --------------- STATUS STYLES START --------------
  StatusUserInfoBLock: {
    width: '95%',
    marginVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
    minHeight: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#566d77',
  },
  StatusInfoName: {
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  StatusInfoAddress: {color: 'white', fontSize: 13},
  StatusUserStatus: {marginVertical: 20, fontWeight: 'bold', fontSize: 24},
  StatusUserStatusUpdate: {fontSize: 13, marginTop: 10},
  QRCodeBlock: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  // --------------- STATUS STYLES END --------------
  Exit: {
    flexDirection: 'row',
    marginHorizontal: 40,
    alignSelf: 'center',
    marginBottom: 40,
    alignItems: 'center',
  },
});

export default styles;
