---
hide_table_of_contents: true
---

# OnCounterTargetChange

## Usage

* Called when a player tries to change the target number of a power counter
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnCounterTargetChange(PowerCounter counter, BasePlayer player, int targetNumber)
{
    Puts("OnCounterTargetChange works!");
    return null;
}
```
