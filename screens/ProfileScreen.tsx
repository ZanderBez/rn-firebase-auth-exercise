import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { logoutUser, getUserInfo } from '../services/authService'

const ProfileScreen = () => {

    const handleLogout = () => { 
        logoutUser() 
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Profile</Text>
                <Text style={styles.userInfo}>{getUserInfo()?.email}</Text>
                <Text style={styles.userInfo}>{getUserInfo()?.uid}</Text>

                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center"
    },
    content: {
        padding: 20,
        alignItems: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        marginBottom: 20
    },
    userInfo: {
        fontSize: 16,
        marginBottom: 10
    },
    logoutButton: {
        backgroundColor: "black",
        paddingVertical: 12,
        paddingHorizontal: 30,
        marginTop: 30
    },
    logoutText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500"
    }
})

export default ProfileScreen