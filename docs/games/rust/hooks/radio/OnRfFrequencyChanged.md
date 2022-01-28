---
hide_table_of_contents: true
---

# OnRfFrequencyChanged

## Usage

* Called after a player has changed the frequency of an RF broadcaster or receiver
* No return behavior

## Examples

```csharp title=""
void OnRfFrequencyChanged(IRFObject obj, int frequency, BasePlayer player)
{
    Puts("OnRfFrequencyChanged works!");
}
```
