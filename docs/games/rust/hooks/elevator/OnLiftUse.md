---
hide_table_of_contents: true
---

# OnLiftUse

## Usage

* Called when a player calls a lift or procedural lift
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnLiftUse(Lift lift, BasePlayer player)
{
    Puts("OnLiftUse works!");
    return null;
}
```

```csharp title=""
object OnLiftUse(ProceduralLift lift, BasePlayer player)
{
    Puts("OnLiftUse works!");
    return null;
}
```