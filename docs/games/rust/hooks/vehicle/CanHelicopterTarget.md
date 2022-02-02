---
hide_table_of_contents: true
---

# CanHelicopterTarget

## Usage

* Called when a patrol helicopter attempts to target a player to attack
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanHelicopterTarget(PatrolHelicopterAI heli, BasePlayer player)
{
    Puts("CanHelicopterTarget works!");
    return null;
}
```
