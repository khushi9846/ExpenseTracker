import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { TouchableOpacity, SafeAreaView, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import ExpenseComponent from "./files/expense_component";
import Addform from "./files/add_expense";
import styles from "./files/styles";
export default function App() {
    // Define state variables using the useState hook
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Food");
    const [expenses, setExpenses] = useState([]);
    const categories = ["Food", "Clothes", "Bills", "Others"];
    const [addForm, setAddForm] = useState(false);

    // Function to open the add expense form
    const addExpense = () => {
        setAddForm(true);
    };

    // Initialize the chart data with default values
    const [chartData, setChartData] = useState([
        {
            name: "Food",
            amount: 0,
            color: "#e62d20",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
        },
        {
            name: "Clothes",
            amount: 0,
            color: "#27e620",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
        },
        {
            name: "Bills",
            amount: 0,
            color: "#1c6bd9",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
        },
        {
            name: "Others",
            amount: 0,
            color: "#5adbac",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
        },
    ]);

    // Render the components and UI
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.heading}>Welcome to New App</Text>
            <Text style={styles.heading2}>
                Expense Tracker using React-Native
            </Text>

            {/* Render the PieChart component with data */}
            <PieChart
                data={chartData}
                width={300}
                height={200}
                chartConfig={{
                    backgroundGradientFrom: "#1E2923",
                    backgroundGradientTo: "#08130D",
                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                }}
                accessor="amount"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
            />

            {/* Conditional rendering: If addForm is true, 
                render the Addform component */}
            {addForm == true ? (
                <Addform
                    name={name}
                    setName={setName}
                    amount={amount}
                    setAmount={setAmount}
                    category={category}
                    setCategory={setCategory}
                    categories={categories}
                    setExpenses={setExpenses}
                    expenses={expenses}
                    chartData={chartData}
                    setChartData={setChartData}
                    setAddForm={setAddForm}
                />
            ) : (
                /* If addForm is false, render the "Add Expense" button */
                <View style={styles.row}>
                <TouchableOpacity
        onPress={addExpense}
        style={styles.addButton}>
        
        <Text style={styles.addButtonText}>Add Expense Item</Text>
    </TouchableOpacity>
                </View>
            )}

            {/* Render the ExpenseComponent */}
            <ExpenseComponent
                expenses={expenses}
                setExpenses={setExpenses}
                chartData={chartData}
                setChartData={setChartData}
            />
        </SafeAreaView>
    );
}
