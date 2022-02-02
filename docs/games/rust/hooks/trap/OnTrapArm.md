---
hide_table_of_contents: true
---

# OnTrapArm

## Usage

* Called when the player arms a bear trap
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnTrapArm(BearTrap trap, BasePlayer player)
{
    Puts("OnTrapArm works!");
    return null;
}
```
