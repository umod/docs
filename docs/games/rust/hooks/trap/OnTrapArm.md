---
hide_table_of_contents: true
---

# OnTrapArm

## Usage

* Called when the player arms a bear trap
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnTrapArm(BearTrap trap, BasePlayer player)
{
    Puts("OnTrapArm works!");
    return null;
}
```
