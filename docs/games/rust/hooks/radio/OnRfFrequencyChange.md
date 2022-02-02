---
hide_table_of_contents: true
---

# OnRfFrequencyChange

## Usage

* Called when a player tries to change the frequency of an RF broadcaster or receiver
* Useful for preventing particular reserved frequencies from being selected
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnRfFrequencyChange(IRFObject obj, int frequency, BasePlayer player)
{
    Puts("OnRfFrequencyChange works!");
    return null;
}
```
